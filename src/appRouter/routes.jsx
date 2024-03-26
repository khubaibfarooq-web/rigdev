import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import JobsPage from '../pages/JobsPage';
import JobPage, { jobLoader } from '../pages/JobPage';
import AddJobPage from '../pages/AddJobPage';
import EditJobPage from '../pages/EditJobPage';
import NotFound from '../pages/NotFound';
import { deleteJob, addJob, updateJob } from '../utilities/services';


const routes = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
                <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
                <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
                <Route path="*" element={<NotFound />} />
            </Route >
        )
    );
    return <RouterProvider router={router} />
}

export default routes;