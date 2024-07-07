import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  HStack,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import logo from "../assets/logo.svg";
import ColorModeButton from "./ColorModeButton";

interface Props {
  types: string[];
  onSelectType: (type: string) => void;
  selectedType: string;
}

const NavBar: React.FC<Props> = ({
  types,
  onSelectType,
  selectedType,
}: Props) => {
  return (
    <>
      <HStack padding="10px" justifyContent="space-between">
        <HStack>
          <Image src={logo} boxSize="60px" borderRadius="20px"></Image>
          <Breadcrumb
            fontWeight="medium"
            spacing="10px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            {types.map((type) => (
              <BreadcrumbItem key={type} isCurrentPage={type === selectedType}>
                <BreadcrumbLink href="#" onClick={() => onSelectType(type)}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </HStack>

        <ColorModeButton />
      </HStack>
    </>
  );
};

export default NavBar;
