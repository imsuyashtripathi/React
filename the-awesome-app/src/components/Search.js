import axios from "axios";
import React,{useRef, useState,useEffect} from "react";
import withBorder from "../hoc/withBorder";

//const array=useState("");///returned array[variable,]
// const searchKey=array[0]
//const setSearchKey=array[1]
function Search(){

    const [searchKey,setSearchKey]=useState("");
    const counter=useRef(0);
    const searchKeyRef=useRef(null);
    const [results,setResults]=useState([]);
    const [limitValue,setLimitValue]=useState(null);
    const limit=useRef([10,20,30,40,50,60,70,80,90,100]);
    useEffect(()=>{
        //this is equivalent to the componentDidMount, will be called only once
        searchKeyRef.current.focus();
        setLimitValue(limit.current[0])
        return()=>{
            // this is equivalent to the componentWillUnmount, invoked only once

        }
    },[]);

    useEffect(()=>{
        //this is equivalent to the componentDidUpdate,will be invoked when dependency is changed
    },[results])
    function change(event){
        setSearchKey(event.target.value);
    }
    function limitChange(event){
        setLimitValue(event.target.value);
    }

    async function search(){
        const url="https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+searchKey+"&limit="+limitValue;
        counter.current++;
        console.log("counter "+counter.current);
        if(searchKey){
            try {
                const response=await axios.get(url);
                const data=response.data;
                const value=[];
                for(var i=0;i<data[1].length;i++){
                    value.push([data[1][i],data[2][i],data[3][i]]);
                }
                setResults(value);
            } catch (error) {
                console.log("Failed to search")
            }
        }
    }

    return(
        <div>
            <h3>Wiki Search</h3>
            <div className="alert alert-warning">
                Search Count :{counter.current}
            </div>
            <div>
                <input className="form-control" type="Search" placeholder="Search"
                            value={searchKey} onChange={change} ref={searchKeyRef}/>
            </div>
            <br/>
                {searchKey?<p className="alert alert-success">Searching for {searchKey}</p>:null}
                <div>
                    <select className="btn btn-secondary" onChange={limitChange}>
                        {limit.current.map((item,index)=>{
                            return(
                                <option value={item} key={item}>{item}</option>   
                            )
                        })}
                    </select>
                </div>
            <br/>
                <button className="btn btn-primary" value={counter} onClick={search}>Search</button>
            <div>
                {results.length>0?
                                <table className="table table-striped">
                                <thead className="thead-light">
                                      <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Name</th>
                                      <th scope="col">Description</th>
                                      <th scope="col">Link</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {results.map((item,index)=>{
                                          return(
                                              <tr key={index+1}>
                                                  <th scope="row">{index+1}</th>
                                                  <td key={item[0]}>
                                                      {item[0]}
                                                  </td>
                                                  <td key={item[1]}>
                                                      {item[1]}
                                                  </td>
                                                  <td key={item[2]}>
                                                      <a href={item[2]} target="_blank">{item[2]}</a>
                                                  </td>
                                              </tr>
                                          )
                                      })}
                                  </tbody>
                              </table>
                :null}
            </div>
        </div>
    )
}
export default withBorder(Search);