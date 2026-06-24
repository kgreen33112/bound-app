import './ProgressBar.css';

function ProgressBar ({ className="", percent=25 }) {
    return (
        <div className={`progress-bar ${className}`}>
            <div 
                className="progress-fill"
                style={{ width: `${percent}%` }}
            >
                <span className="progress-stat">{percent}%</span>
            </div>
            
        </div>
    );
}

export default ProgressBar;