import { Job } from './db.js';
export const resolvers = {
    Query: {
        jobs: async () => Job.findAll(),
    },

    Job: {
        company: (job) => Company.findbyId(job.companyId)
        },
    }
};