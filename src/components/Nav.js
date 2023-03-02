import { Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <div className="Navbar">
        <h1 className="nav--title">Hi, I'm EMILY STARR.</h1>

        <ButtonGroup gap='2'>
            <Link to="/resume">
                <Button
                colorScheme="green"
                to="/resume">resume</Button>
            </Link>
            <Link to="/portfolio">
                <Button
                colorScheme="cyan"
                to="/portfolio">code</Button>
            </Link>
        </ButtonGroup>

        </div>
    )
}