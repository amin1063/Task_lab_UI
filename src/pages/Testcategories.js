import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { testCategoriesTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getTestCategories } from '../redux/actions/testsActions';

const Testcategories = () => {
<<<<<<< HEAD
  const URL = 'TestCategorie';
=======
  const URL = 'TestCategory';
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testCategoriesList =  useSelector((state) => state.testsReducer.testCategoriesList);

  useEffect(()=>{
    dispatch(getTestCategories(URL));
  },[])
  
  useEffect(()=>{
    if(testCategoriesList && testCategoriesList?.length){
      setData(testCategoriesList)
    }
  },[testCategoriesList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getTestCategories}
        headingName={'Test Categories'}
        tableHeadings={testCategoriesTableHeadings}
      />
    </>
  )
}
export default Testcategories