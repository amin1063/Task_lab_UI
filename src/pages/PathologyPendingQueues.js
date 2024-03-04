import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getPathologyPendingQueues } from '../redux/actions/pathologyActions';

const PathologyPendingQueues = () => {
  const URL = 'PathologyPendingQueues';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const pathologyPendingQueuesList =  useSelector((state) => state.pathologyReducer.pathologyPendingQueuesList);

  useEffect(()=>{
    dispatch(getPathologyPendingQueues(URL));
  },[])
  
  useEffect(()=>{
    if(pathologyPendingQueuesList && pathologyPendingQueuesList?.length){
      setData(pathologyPendingQueuesList)
    }
  },[pathologyPendingQueuesList])
  
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getPathologyPendingQueues}
        headingName={'PathologyPendingQueues'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default PathologyPendingQueues