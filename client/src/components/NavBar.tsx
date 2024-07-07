import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  HStack,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px" borderRadius="20px"></Image>

        <Breadcrumb
          fontWeight="medium"
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">New</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Top</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Best</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Ask</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Show</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Jobs</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
    </>
  );
}

export default NavBar;
