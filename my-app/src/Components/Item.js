const Item = ({ props }) => {
    return (
        <li>
            <a href='#'>
                {props.link}
            </a>
        </li>
    );
        
    
}

export default Item;