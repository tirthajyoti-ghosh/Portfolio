/* eslint-disable react/prop-types */
import { Modal } from 'antd';
import { CloseIcon, ExternalLinkIcon, GithubIcon } from './Icons';

const ProjectModal = ({ project, setCurrentProject }) => (
    <Modal
        centered
        closable
        maskClosable
        closeIcon={<CloseIcon />}
        visible={project}
        footer={null}
        onCancel={() => setCurrentProject()}
    >
        <h1>{project.name}</h1>

        <ul className="info">
            <li>{project.type}</li>
            <li className="circle">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
                </svg>
            </li>
            <li>{project.date}</li>
        </ul>

        <img src={project.image} alt={project.name} />

        <div className="details">
            <p>{project.description}</p>

            <div>
                <ul className="tags">
                    {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>

                <div className="links">
                    <button className="btn" type="button" onClick={() => window.open(project.liveLink, '_blank')}>
                        See live
                        <ExternalLinkIcon />
                    </button>
                    <button className="btn" type="button" onClick={() => window.open(project.sourceLink, '_blank')}>
                        See source
                        <GithubIcon />
                    </button>
                </div>
            </div>
        </div>
    </Modal>
);

export default ProjectModal;
