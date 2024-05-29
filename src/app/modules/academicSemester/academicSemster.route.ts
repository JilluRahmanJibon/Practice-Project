import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidations } from './academicSemester.validation';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidations.createAcademicSemesterValidation),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get('/', AcademicSemesterControllers.getAllAcademicSemesters)
router.get('/:semesterId',AcademicSemesterControllers.getSingleAcademicSemester)

router.patch('/:semesterId',validateRequest(academicSemesterValidations.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateAcademicSemester)

export const AcademicSemisterRoutes = router;
