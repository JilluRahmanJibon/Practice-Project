import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterInToDB(
    req.body,
  );
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully!',
    data: result,
  });
});


const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester data fatched successfully!',
    data:result
  })
})

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(req.params.semesterId)
   sendResponse(res, {
     statusCode: httpStatus.OK,
     success: true,
     message: 'Academic Semester Single data fatched successfully!',
     data: result,
   });
})

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result = AcademicSemesterServices.updateAcademicSemester(semesterId,req.body)
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Academic Semester is retrived successfully!',
       data: result,
     });
})
export const AcademicSemesterControllers = {
  createAcademicSemester,getAllAcademicSemesters,getSingleAcademicSemester,updateAcademicSemester
};
