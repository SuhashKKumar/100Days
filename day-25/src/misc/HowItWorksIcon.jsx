import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HowItWorksIcon = () => {
  return (
    <div className="flex items-center gap-5 text-sky-400 text-lg md:text-2xl">
          <a>How it works</a>
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
  )
}

export default HowItWorksIcon