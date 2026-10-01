import StudentList from './StudentList';
import { Elevi } from '../data';
import Header from './Header';
function Main() {
    return (
        <main>
            <Header />
            <StudentList students={Elevi} />
        </main>
    )
}

export default Main