import Filters from './Filters';
import Results from './Results';
import './Content.css';

export default function Content() {
    return (
        <div className="content">
            <Filters />
            <Results />
        </div>
    );
}
