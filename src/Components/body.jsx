import StudentList from './StudentList';
import { Elevi } from '../data';
function Projects() {
    return (
        <main>
            <StudentList students={Elevi} />
        </main>
    );
}

export default Projects;