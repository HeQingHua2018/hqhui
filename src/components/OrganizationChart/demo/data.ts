export const data = {
  nodes: [
    {
      id: '0',
      data: {
        email: 'ejoplin@mail.com',
        fax: '555-0101',
        name: 'Eric Joplin',
        phone: '555-0100',
        position: 'Chief Executive Officer',
        status: 'online',
      },
    },
    {
      id: '1',
      data: {
        email: 'groberts@mail.com',
        fax: '555-0101',
        name: 'Gary Roberts',
        phone: '555-0100',
        position: 'Chief Executive Assistant',
        status: 'busy',
      },
    },
    {
      id: '2',
      data: {
        email: 'aburns@mail.com',
        fax: '555-0103',
        name: 'Alex Burns',
        phone: '555-0102',
        position: 'Senior Executive Assistant',
        status: 'offline',
      },
    },
    {
      id: '4',
      data: {
        email: 'msmith@mail.com',
        fax: '555-0115',
        name: 'Mary Smith',
        phone: '555-0114',
        position: 'Finance Manager',
        status: 'busy',
      },
    },
    {
      id: '5',
      data: {
        email: 'bwhite@mail.com',
        fax: '555-0117',
        name: 'Bob White',
        phone: '555-0116',
        position: 'HR Manager',
        status: 'online',
      },
    },
    {
      id: '6',
      data: {
        email: 'jjones@mail.com',
        fax: '555-0119',
        name: 'John Jones',
        phone: '555-0118',
        position: 'IT Manager',
        status: 'offline',
      },
    },
    {
      id: '7',
      data: {
        email: 'klee@mail.com',
        fax: '555-0121',
        name: 'Karen Lee',
        phone: '555-0120',
        position: 'Marketing Manager',
        status: 'online',
      },
    },
    {
      id: '8',
      data: {
        email: 'dmiller@mail.com',
        fax: '555-0123',
        name: 'David Miller',
        phone: '555-0122',
        position: 'Sales Manager',
        status: 'busy',
      },
    },
    {
      id: '9',
      data: {
        email: 'rjoe@mail.com',
        fax: '555-0125',
        name: 'Rachel Joe',
        phone: '555-0124',
        position: 'Operations Manager',
        status: 'offline',
      },
    },
    {
      id: '10',
      data: {
        email: 'tadams@mail.com',
        fax: '555-0127',
        name: 'Tom Adams',
        phone: '555-0126',
        position: 'Product Manager',
        status: 'online',
      },
    },
    {
      id: '11',
      data: {
        email: 'wbrown@mail.com',
        fax: '555-0129',
        name: 'Will Brown',
        phone: '555-0128',
        position: 'Customer Support Manager',
        status: 'busy',
      },
    },
    {
      id: '12',
      data: {
        email: 'dmartin@mail.com',
        fax: '555-0131',
        name: 'Diana Martin',
        phone: '555-0130',
        position: 'Compliance Officer',
        status: 'offline',
      },
    },
    {
      id: '13',
      data: {
        email: 'jwilson@mail.com',
        fax: '555-0133',
        name: 'Jim Wilson',
        phone: '555-0132',
        position: 'Legal Counsel',
        status: 'online',
      },
    },
    {
      id: '14',
      data: {
        email: 'charris@mail.com',
        fax: '555-0135',
        name: 'Cathy Harris',
        phone: '555-0134',
        position: 'Procurement Manager',
        status: 'busy',
      },
    },
    {
      id: '15',
      data: {
        email: 'eblack@mail.com',
        fax: '555-0137',
        name: 'Evan Black',
        phone: '555-0136',
        position: 'Logistics Manager',
        status: 'offline',
      },
    },
    {
      id: '16',
      data: {
        email: 'ywang@mail.com',
        fax: '555-0139',
        name: 'Yvonne Wang',
        phone: '555-0138',
        position: 'Research and Development Manager',
        status: 'online',
      },
    },
    {
      id: '17',
      data: {
        email: 'jsanchez@mail.com',
        fax: '555-0141',
        name: 'Juan Sanchez',
        phone: '555-0140',
        position: 'Chief Technology Officer',
        status: 'busy',
      },
    },
    {
      id: '18',
      data: {
        email: 'mjones@mail.com',
        fax: '555-0143',
        name: 'Molly Jones',
        phone: '555-0142',
        position: 'Chief Financial Officer',
        status: 'offline',
      },
    },
    {
      id: '19',
      data: {
        email: 'rking@mail.com',
        fax: '555-0145',
        name: 'Richard King',
        phone: '555-0144',
        position: 'Chief Operating Officer',
        status: 'online',
      },
    },
  ],
  edges: [
    {
      source: '0',
      target: '1',
    },
    {
      source: '1',
      target: '2',
    },
    {
      source: '0',
      target: '17',
    },
    {
      source: '0',
      target: '18',
    },
    {
      source: '0',
      target: '19',
    },
    {
      source: '17',
      target: '6',
    },
    {
      source: '17',
      target: '16',
    },
    {
      source: '18',
      target: '4',
    },
    {
      source: '18',
      target: '12',
    },
    {
      source: '19',
      target: '9',
    },
    {
      source: '19',
      target: '15',
    },
    {
      source: '4',
      target: '5',
    },
    {
      source: '4',
      target: '10',
    },
    {
      source: '5',
      target: '8',
    },
    {
      source: '6',
      target: '11',
    },
    {
      source: '9',
      target: '7',
    },
    {
      source: '15',
      target: '13',
    },
    {
      source: '15',
      target: '14',
    },
  ],
};
