import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    
    <input id="text-fields" placeholder="Search for Assignments"/>
    <button type="button">Group</button>
    <button type="button">Assignment</button>
                <select>
                    <option value="VAL1">Edit Assignment Dates</option>
                 </select>
                    <select>
                       <option value="VAL1">Edit</option>
                       <option value="VAL1">Speed Grader</option>
                       <option value="VAL1">Duplicate</option>
                       <option value="VAL1">Delete</option>
                       <option value="VAL1">Move To...</option>
                       <option value="VAL1">Send To...</option>
                       <option value="VAL1">Copy To...</option>
                       <option value="VAL1">Share to Commons</option>
                    </select>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;