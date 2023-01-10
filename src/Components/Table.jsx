import {
  TableContainer,
  Table,
  Tr,
  Th,
  Tbody,
  Thead,
  Td,
  Button,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/table.module.css";

const TableCompo = ({ name, gender, loginData }) => {
  let x = loginData.role;

  const handleApprove = () => {
    alert("Application successfully approve");
  };

  const handleReject = () => {};

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Profile</Th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Approve</Th>
            <Th>Rejected</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <img
                className={styles.img}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEX///8AAADt7e0wMDB/f3+CgoL5+fl7e3vQ0NCoqKhmZmZVVVUfHx/Y2NheXl64uLhxcXGMjIwnJydMTEyTk5NFRUXh4eHIyMgKCgqZmZnz8/M/Pz+hoaE2NjYTExOwsLAV7jEDAAACyElEQVRoge2bi3aqMBBFCSrii6eCotb//8uKoKWKkDk54O1d2R/QvcBkmJxJHccUP/66GP8RiOw0UWq/+YDZDVdf6spqfPVmmqiKaGSzt0jVg3Gf3I/ULxajmYvLRD2zHGfJZXHyoi7ZbX13YLUf7VvVNybBIvMGU2+C9+aa9DDM87vLXvWNaAD9Qk9dcmK7p/pupeZcd9RvbLJkurcyt1Ixz+1L3UrlLLf3WtJ6SVg7XrDQfyDVey/tV72Sch49Q9xKZRR5iMlDily8zyq2FLmouP3AKXNW/pfk078vn1m5lesxs3Irt3Ir//fl/ZFAKwHDDZ1XruwJZxawcS4xb56hs1JFaiwHf/ES81/9gMsPxnLwpFZifloDz6glhHNqR+bYzd7c7exQ+Y4gj1E5I5GCVxwjHQBysAqfIC+AIKwkoQTA4IpjrDe4xnEyGbDMkMYuK8TNmndB7QQr8YfeOyeAvG629mlWJ0lBkjuao50mvFkDUN55owagwjJqa81a6l7z3PL3ThzwOIVUTp0qClNI7lRPNmCijZZqRAueuNQrBGuOudoqNvpy/h2Gj8pzfTltjvpA8FHn31wRhASc7q3JXF9OvjjgiEICShT0C0EXSb8r5R315Uf2VR1X0MdxDkoNRMcW8zCmSSHMpAJa7+oAeRhxwQvq+h1eff9k6yzZZnfOrO0GvHXee4fyKNZ7h3IRTioSio8rFWvzKCwHFtudo1lL4xuk7SUB3kRnwLn8mSWWULiC3qWLufwb54J3RNqYyvQFHDW3E+t/5YoTkAB1k5z09N7lzFaXnC8a1T4cRH3T91WdfDD1Td9VdXKD8aEe6Tu9xg1yAkHbtzYTXmfGiZ6LngtO6DFmzarjkWtKP/Fj38HzIxPq7x12ndiU+jqyC86uzJi4Vm7lVm7l/7t80NbpHef6s0o4Fcm5zzt1/w2O6i4f/Bt5rC7ZQuchHgAAAABJRU5ErkJggg=="
                alt="img"
              />
            </Td>
            <Td>{name}</Td>
            <Td>{gender}</Td>
            <Td>
              {x === "r1" ? (
                <Button onClick={handleApprove} colorScheme={"green"}>
                  APPROVE
                </Button>
              ) : (
                <Button disabled={true} colorScheme={"green"}>
                  APPROVE
                </Button>
              )}
            </Td>
            <Td>
              {x === "r1" ? (
                <Button onClick={handleReject} colorScheme={"red"}>
                  REJECT
                </Button>
              ) : (
                <Button disabled={true} colorScheme={"red"}>
                  REJECT
                </Button>
              )}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCompo;
