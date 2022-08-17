import styles from "./BodyWrapper.module.css"

const BodyWrapper = props => {
    return <div className="mb-6">
        {props.children}
    </div>
}

export default BodyWrapper