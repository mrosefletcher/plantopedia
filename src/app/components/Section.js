import styled from '@emotion/styled';

import { MAX_CONTENT_WIDTH, SECTION_PADDING } from '../Styles/Styles.js';

export const SectionBackground = styled.div((props) => ({
    boxSizing: 'border-box',
    display: 'block',
    padding: props.padding ? SECTION_PADDING : 0,
}));

export const SectionContent = styled.div((props) => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    padding: props.padding ? SECTION_PADDING : 0,
    alignItems: props.leftAlign ? 'flex-start' : 'center',
    justifyContent: props.leftJustify ? 'flex-start' : 'center',
    margin: 'auto',
    maxWidth: MAX_CONTENT_WIDTH,
}));

export const SectionGap = styled.div((props) => ({
    height: props.height,
    width: props.width,
}));
