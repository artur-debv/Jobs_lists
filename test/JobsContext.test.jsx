import { screen, render, fireEvent } from "@testing-library/react";
import { JobsContent } from "../components/JobsContent";
import { TagProvider } from "../components/Context/TagContext";
import { useTag } from "../components/Context/TagContext";
import { useEffect } from "react";
describe("JobsContent", () => {
    it('should render the JobsContent', () => {
        render(
            <TagProvider>
                <JobsContent />
            </TagProvider>
        )
        const Context = screen.getByText('Photosnap')
        expect(Context).toBeInTheDocument();
    })

    it('should filter jobs based on tags', () => {
        render(
            <TagProvider>
                <JobsContent />
            </TagProvider>
        )
        const context = screen.getByText('Manage')
        expect(context).toBeInTheDocument();
        const AddTagComponent = () => {
            const { addTag } = useTag();
            useEffect(() => {
                addTag('Frontend');
            }, [addTag]);

        }
        render(
            <TagProvider>
                <JobsContent />
                <AddTagComponent />
            </TagProvider>
        );
    })

    it('should filter click jobs Based on Tags', () => {

        const MockClick = jest.fn()
        const tags = ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript']

        render(
            <TagProvider>
                <JobsContent />
            </TagProvider>
        )

        tags.forEach((tag) => {
            const tagButtons = screen.getAllByText(tag);
            expect(tagButtons.length).toBeGreaterThan(0);

            fireEvent.click(tagButtons[0]);

            MockClick(tag);
        });

    })

})