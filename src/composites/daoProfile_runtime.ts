import { type RuntimeCompositeDefinition } from "@composedb/types";

// This is an auto-generated file, do not edit manually
export const definition:RuntimeCompositeDefinition = {
  models: {
    DAO: {
      id: 'kjzl6hvfrbw6c96obc67ocqpesvzg0v5opvwox3pncdkh9co0bjy6cntgh269nh',
      accountRelation: { type: 'list' }
    },
    NabuProfileAlpha: {
      id: 'kjzl6hvfrbw6c9tvpvx7o8s4zjdw14jgvf5a35e7t5p31cxpw3k3e52vc46n3ih',
      accountRelation: { type: 'single' }
    },
    DaoProfileRelation: {
      id: 'kjzl6hvfrbw6c778grkt67dl3kdp3rt4kubayafaotgzpysqrn12dj8ctcia828',
      accountRelation: { type: 'list' }
    }
  },
  objects: {
    DAO: {
      url: { type: 'string', required: false },
      name: { type: 'string', required: true },
      chain: { type: 'chainid', required: true },
      roles: {
        type: 'list',
        required: false,
        item: { type: 'string', required: false }
      },
      token: { type: 'accountid', required: true },
      creator: { type: 'did', required: true },
      members: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c778grkt67dl3kdp3rt4kubayafaotgzpysqrn12dj8ctcia828',
          property: 'nabuID'
        }
      },
      createdAt: { type: 'datetime', required: true },
      description: { type: 'string', required: true }
    },
    NabuProfileAlphaSocialNetworkInfo: {
      url: { type: 'string', required: false },
      network: { type: 'string', required: true },
      username: { type: 'string', required: true }
    },
    NabuProfileAlpha: {
      userDID: { type: 'did', required: true },
      addressList: {
        type: 'list',
        required: false,
        item: { type: 'accountid', required: false }
      },
      displayName: { type: 'string', required: true },
      accountCreated: { type: 'datetime', required: true },
      socialNetworks: {
        type: 'list',
        required: false,
        item: {
          type: 'reference',
          refType: 'object',
          refName: 'NabuProfileAlphaSocialNetworkInfo',
          required: false
        }
      },
      daoList: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c778grkt67dl3kdp3rt4kubayafaotgzpysqrn12dj8ctcia828',
          property: 'daoID'
        }
      }
    },
    DaoProfileRelation: {
      daoID: { type: 'streamid', required: true },
      nabuID: { type: 'streamid', required: true },
      dao: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c96obc67ocqpesvzg0v5opvwox3pncdkh9co0bjy6cntgh269nh',
          property: 'daoID'
        }
      },
      nabu: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9tvpvx7o8s4zjdw14jgvf5a35e7t5p31cxpw3k3e52vc46n3ih',
          property: 'nabuID'
        }
      }
    }
  },
  enums: {},
  accountData: {
    daoList: { type: 'connection', name: 'DAO' },
    nabuProfileAlpha: { type: 'node', name: 'NabuProfileAlpha' },
    daoProfileRelationList: { type: 'connection', name: 'DaoProfileRelation' }
  }
};