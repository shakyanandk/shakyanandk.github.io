import LaunchIcon from '@material-ui/icons/Launch'
import './Certifications.css'

const CertificationsContainer = ({ certificate }) => (
    <div className='certificate'>
        <h3>{certificate.name}</h3>
        <p className='certificate__description'>{certificate.description}</p>
        {certificate.link && (
            <a
                href={certificate.link}
                aria-label='certificate link'
                className='link link--icon'
                target="_blank" rel="noopener noreferrer"
            >
                <LaunchIcon />
            </a>
        )}
    </div>
)

export default CertificationsContainer
