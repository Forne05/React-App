import Title from './Title';
import Item from './Item';


const Container = () => {
    const title = '911NSCreaciones'
    const link1 = 'Home'
    const link2 = 'About'
    const link3 = 'Shop'
    const link4 = 'Galery'
    const link5 = 'Contact'

    return ( 
        <div>
            <Title title={title} />
            <Item link1={link1} />
            <Item link2={link2} />
            <Item link3={link3} />
            <Item link4={link4} />
            <Item link5={link5} />
        </div>
    );
    
}

export default Container; 
