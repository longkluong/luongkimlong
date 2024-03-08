import styled from "styled-components";
import breakpoint from "../utils/breakpoint";

export const Toc = styled.div`
    grid-column: 2/3;

    ${breakpoint.md} {
        grid-column: 6/7;
    }

    position: relative;

    ol {
        list-style: none; /* remove the default numbering */
        counter-reset: item; /* set up a counter for child items */
    }

    ol li {
        position: relative; /* set the position of child items */
    }

    ol ol li {
    margin-left: 20px; /* set the indentation for nested child items */
    }
`

export const TocContents = styled.details`
    padding: 1rem;
    margin-bottom: 2rem;
    max-height: calc(100vh - (4rem * 2));
    top: 20%;

    ${breakpoint.md} {
        position: sticky;
    }
`

