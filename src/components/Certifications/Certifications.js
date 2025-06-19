import uniqid from 'uniqid'
import { certifications } from '../../portfolio'
import CertificationsContainer from './CertificationsContainer';
import './Certifications.css'

const Certifications = () => {
    if (!certifications.length) return null

    return (
        <section id='certifications' className='section' >
            <h2 className='section__title'>Certifications</h2>
            <div className='certifications__grid'>
                {certifications.map((certificate) => (
                    <CertificationsContainer key={uniqid()} certificate={certificate} />
                ))}
            </div>
        </section>
    )
}

export default Certifications
