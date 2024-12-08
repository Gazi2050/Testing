import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import Greet from '../../src/components/Greet'

describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name='araf' />);

        const heading = screen.getAllByRole('heading');
        expect(heading)
    })
})