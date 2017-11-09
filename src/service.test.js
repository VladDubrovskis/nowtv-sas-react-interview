jest.mock('./data');

import { getMembers, getMessages } from './data';



import getChatLog from './service';

it('returns the correct format back in the right order sorted by time', async () => {

  getMembers.mockReturnValueOnce(Promise.resolve([
    {
      "id": "cff77726-363e-4ba6-a953-4dc431cdd383",
      "firstName": "Ralph",
      "lastName": "Nguyen",
      "email": "rnguyen6@odnoklassniki.ru",
      "avatar": "http://dummyimage.com/100x100.png/dddddd/000000",
      "ip": "192.86.3.21"
    },
    {
      "id": "0bdd3633-d683-432d-add1-4c0d4f841ec3",
      "firstName": "Lois",
      "lastName": "Wheeler",
      "email": "lwheeler7@harvard.edu",
      "avatar": null,
      "ip": "131.205.120.5"
    },
    {
      "id": "c980934a-f54e-459e-8137-0ec3654cdafb",
      "firstName": "Aaron",
      "lastName": "Williams",
      "email": "awilliams8@indiegogo.com",
      "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
      "ip": "88.59.162.204"
    }
  ]));

  getMessages.mockReturnValueOnce(Promise.resolve([
    {
      "id": "1469e146-075f-46d2-888b-8d3152da1be9",
      "userId": "cff77726-363e-4ba6-a953-4dc431cdd383",
      "message": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
      "timestamp": "2016-01-01T02:00:00Z"
    },
    {
      "id": "75ebf4b8-a63b-48d3-b348-b67e6e898b55",
      "userId": "0bdd3633-d683-432d-add1-4c0d4f841ec3",
      "message": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "timestamp": "2016-01-01T03:00:00Z"
    },
    {
      "id": "555f4e1b-90a6-4079-850d-54001f29ce44",
      "userId": "c980934a-f54e-459e-8137-0ec3654cdafb",
      "message": "Quisque ut erat. Curabitur gravida nisi at nibh.",
      "timestamp": "2016-01-01T01:00:00Z"
    }
  ]));

  expect(await getChatLog()).toEqual([
    {
      "messageId": "555f4e1b-90a6-4079-850d-54001f29ce44",
      "userId": "c980934a-f54e-459e-8137-0ec3654cdafb",
      "fullName": "Aaron Williams",
      "timestamp": "2016-01-01T01:00:00Z",
      "email": "awilliams8@indiegogo.com",
      "message": "Quisque ut erat. Curabitur gravida nisi at nibh.",
      "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000"
    },
    {
      "messageId": "1469e146-075f-46d2-888b-8d3152da1be9",
      "userId": "cff77726-363e-4ba6-a953-4dc431cdd383",
      "fullName": "Ralph Nguyen",
      "timestamp": "2016-01-01T02:00:00Z",
      "email": "rnguyen6@odnoklassniki.ru",
      "message": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
      "avatar": "http://dummyimage.com/100x100.png/dddddd/000000",
    },
    {
      "messageId": "75ebf4b8-a63b-48d3-b348-b67e6e898b55",
      "userId": "0bdd3633-d683-432d-add1-4c0d4f841ec3",
      "fullName": "Lois Wheeler",
      "timestamp": "2016-01-01T03:00:00Z",
      "email": "lwheeler7@harvard.edu",
      "message": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "avatar": null
    }
  ])
});

it('returns empty array if something goes wrong', async () => {
    getMessages.mockImplementationOnce(() => {
      throw new Error('ooops');
    });
    expect(await getChatLog()).rejects.toEqual([]);
});


