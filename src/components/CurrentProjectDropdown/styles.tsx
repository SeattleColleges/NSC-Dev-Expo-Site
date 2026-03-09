import styled from "styled-components/native";

export const DropdownContainer = styled.View`
  width: 547px;
  height: 785px;
  background: #5b5b5b;
  padding: 24px;
`;

export const DropdownHeader = styled.Pressable`
  width: 100%;
  height: 75px;
  background: transparent;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 64px;
  font-weight: 500;
  color: #e9e9e9;
  letter-spacing: -1.92px;
`;

export const Chevron = styled.View<{ open: boolean }>`
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

export const CardList = styled.View`
  margin-top: 32px;
  gap: 24px;
`;

export const ProjectCard = styled.Pressable<{ selected: boolean }>`
  width: 486px;
  height: ${({ selected }) => (selected ? "160px" : "163px")};
  background: ${({ selected }) => (selected ? "#0B0B0B" : "#D9D9D9")};
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.Text<{ selected: boolean }>`
  font-size: 36px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? "#FFF" : "#000")};
  text-align: center;
`;
