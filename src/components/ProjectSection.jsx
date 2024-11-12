import React, { Children } from "react";
import Project from "./Project";

export default function ProjectSection() {
    return (
        <section>
            <h2>Projects</h2>
            {Children}
        </section>
    );
}