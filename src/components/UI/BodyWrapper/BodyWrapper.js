import styles from "./BodyWrapper.module.css"

const BodyWrapper = props => {
    return <div className="">
        {props.children}
    </div>
}

export default BodyWrapper