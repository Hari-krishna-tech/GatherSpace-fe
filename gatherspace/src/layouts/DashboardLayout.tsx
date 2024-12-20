import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, Routes, Route, Navigate } from "react-router-dom";
import { FiHome, FiUsers, FiMap } from "react-icons/fi";
import SpaceManager from "../components/space/SpaceManager";
import CreateSpace from "../components/space/CreateSpace";
import JoinSpace from "../components/space/JoinSpace";

interface NavItemProps {
  icon: any;
  children: string;
  to: string;
}

const NavItem = ({ icon, children, to }: NavItemProps) => {
  const activeBg = useColorModeValue("gray.100", "gray.700");
  
  return (
    <Link
      as={RouterLink}
      to={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: activeBg,
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "blue.500",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const DashboardLayout = () => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex minH="100vh">
      {/* Sidebar */}
      <Box
        w="64"
        bg={bg}
        borderRight="1px"
        borderRightColor={borderColor}
        position="fixed"
        h="full"
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            GatherSpace
          </Text>
        </Flex>
        <Stack spacing={0}>
          <NavItem icon={FiHome} to="/dashboard">
            Overview
          </NavItem>
          <NavItem icon={FiMap} to="/dashboard/spaces">
            My Spaces
          </NavItem>
          <NavItem icon={FiUsers} to="/dashboard/join">
            Join Space
          </NavItem>
        </Stack>
      </Box>

      {/* Main Content */}
      <Box ml="64" w="full">
        <Box as="main" p="4">
          <Container maxW="container.xl">
            <Routes>
              <Route
                index
                element={
                  <Box>
                    <Heading size="lg" mb={6}>Welcome to GatherSpace!</Heading>
                    <Stack spacing={6}>
                      <Text fontSize="lg">
                        Get started by creating a new space or joining an existing one.
                      </Text>
                    </Stack>
                  </Box>
                }
              />
              <Route path="spaces" element={<SpaceManager />} />
              <Route path="spaces/create" element={<CreateSpace />} />
              <Route path="join" element={<JoinSpace />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
