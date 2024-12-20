
import { render } from "@testing-library/react";
import { Header } from "../components/Header";
describe('jest', () => {
    it('should', () => {
        expect(1).toBe(1)
    })
    it('should display Element Header',()=>{
        render(<Header/>);
    })
})