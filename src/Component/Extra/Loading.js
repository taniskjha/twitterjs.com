import React, { useContext } from 'react'
import {
    FadeLoader
} from 'react-spinners'
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 5rem;
  border-color: blue;
`;


function Loading() {
    return (
        <div>
            <FadeLoader css={override} size={20} color={"#37A1F5"} />
        </div>
    )
}

export default Loading