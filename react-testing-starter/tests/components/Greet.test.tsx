import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'
describe('Greet', () => {
    it('should render login button when name is not provided', () => {
        render(<Greet />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    })
})