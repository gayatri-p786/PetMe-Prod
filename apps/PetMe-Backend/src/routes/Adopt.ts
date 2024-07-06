import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// POST /adopt - Submit adoption request
router.post('/', async (req: Request, res: Response) => {
  const { userId, livingConditions, previousPetExperience, reasonsForAdoption } = req.body;

  try {
    // Create adoption request
    const adoptionRequest = await prisma.adoptionRequest.create({
      data: {
        livingConditions,
        previousPetExperience,
        reasonsForAdoption,
        approved: false, // Default to false, admin will approve later
        userId,
      },
    });

    return res.status(201).json(adoptionRequest);
  } catch (error) {
    console.error('Error submitting adoption request:', error);
    return res.status(500).json({ error: 'Failed to submit adoption request.' });
  }
});

// GET /adopt/requests - Fetch all adoption requests
router.get('/requests', async (_req: Request, res: Response) => {
  try {
    // Fetch all adoption requests with related user details
    const adoptionRequests = await prisma.adoptionRequest.findMany({
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    return res.json(adoptionRequests);
  } catch (error) {
    console.error('Error fetching adoption requests:', error);
    return res.status(500).json({ error: 'Failed to fetch adoption requests.' });
  }
});

export default router;
