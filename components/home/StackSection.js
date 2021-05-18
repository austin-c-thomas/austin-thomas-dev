import { Code, Subject, Build, Web } from '@material-ui/icons';
import { generateStackList } from '../../utils';

// Content Functions
const renderIcon = (label) => {
  if (label === "Languages") {
    return <Code />
  }; 
  
  if (label === "Libraries/Frameworks") {
    return <Subject />
  };
  
  if (label === "Build/Test Tools") {
    return <Build />
  }; 
  
  if (label === "Design Tools") {
    return <Web />
  };
};


// Component
const StackSection = ({ label }) => {
  const stackList = generateStackList(label);

  return (
    <>
      <div className="stack-section">
        <div className="stack-label">
            {renderIcon(label)}
            <h2>{label}</h2>
        </div>

        <ul className="stack-list">
          {stackList.map((tech, index) => <li key={index} className="list-item">{tech}</li>)}
        </ul>

      </div>

      <style jsx>
        {`
          .stack-section {
            margin-bottom: 30px;
          }

          .stack-label {
            margin-bottom: 10px;
            color: rgb(160, 160, 160);
          }

          .stack-label h2 {
            font-weight: 300;
            font-size: 1.8rem;
            color: #fff;
          }

          .stack-list {
            margin-left: 30px;
            color: rgb(160, 160, 160);
          }

        `}
      </style>
    </>
  );
};

export default StackSection;