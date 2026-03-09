import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  DropdownContainer,
  DropdownHeader,
  HeaderText,
  Chevron,
  CardList,
  ProjectCard,
  CardTitle,
} from "./styles";

const PROJECTS = [
  { id: 1, name: "Next Wave Dev" },
  { id: 2, name: "Belinda’s Closet" },
  { id: 3, name: "NSC Events" },
];

export default function CurrentProjectDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(2);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (id: number) => {
    setSelected(id);
    setOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onPress={toggleOpen}>
        <HeaderText>{open ? "Select Projects" : "Current Projects"}</HeaderText>

        <Chevron open={open}>
          <Feather name="chevron-down" size={48} color="#E9E9E9" />
        </Chevron>
      </DropdownHeader>

      {open && (
        <CardList>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              selected={project.id === selected}
              onPress={() => handleSelect(project.id)}
            >
              <CardTitle selected={project.id === selected}>
                {project.name}
              </CardTitle>
            </ProjectCard>
          ))}
        </CardList>
      )}
    </DropdownContainer>
  );
}
