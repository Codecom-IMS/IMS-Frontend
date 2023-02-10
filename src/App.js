import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { AddStudentPage, AddTeacherPage, DeleteStudentPage, DeleteTeacherPage, LandingPage, MainPage, NavBar, StudentPage, TeacherPage, UpdateStudentPage, UpdateTeacherPage, Waves } from './components';
const router = createBrowserRouter([{
  path: "/",
  element: <LandingPage />,
  children: [
    {
      path: "/mainPage",
      element: <MainPage />
    },
    {
      path: "/mainPage/studentPage",
      element: <StudentPage/>
    },
    {
      path:"/mainPage/teacherPage",
      element: <TeacherPage/>
    },
    {
      path: "/mainPage/studentPage/addStudentPage",
      element: <AddStudentPage/>
    },
    {
      path: "/mainPage/studentPage/updateStudentPage",
      element: <UpdateStudentPage/>
    },
    {
      path: "/mainPage/studentPage/deleteStudentPage",
      element: <DeleteStudentPage/>
    },
    {
      path: "/mainPage/teacherPage/addTeacherPage",
      element: <AddTeacherPage/>
    },
    {
      path: "/mainPage/teacherPage/updateTeacherPage",
      element: <UpdateTeacherPage/>
    },
    {
      path: "/mainPage/teacherPage/deleteTeacherPage",
      element: <DeleteTeacherPage/>
    }
  ]
}])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='inner-header flex'>
          <NavBar/>
          <RouterProvider router={router} />
        </div>
        <Waves/>
      </header>
    </div>
  );
}

export default App;
