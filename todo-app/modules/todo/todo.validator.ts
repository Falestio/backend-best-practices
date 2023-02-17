import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export function validateCreateTodo() {
    return [
        check("todo.title")
            .not()
            .isEmpty()
            .withMessage("Todo title is required")
            .isString()
            .withMessage("Todo title must be a string")
            .isLength({ max: 100 })
            .withMessage("Todo title must be less than 100 characters"),
        check("todo.description")
            .not()
            .isEmpty()
            .withMessage("Todo description is required")
            .isString()
            .withMessage("Todo description must be a string")
            .isLength({ max: 500 })
            .withMessage("Todo description must be less than 500 characters"),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];
}

export function validateEditTodo() {
    return [
        check("todo.title")
            .optional()
            .not()
            .isEmpty()
            .withMessage("Todo title is required")
            .isString()
            .withMessage("Todo title must be a string")
            .isLength({ max: 100 })
            .withMessage("Todo title must be less than 100 characters"),
        check("todo.description")
            .optional()
            .not()
            .isEmpty()
            .withMessage("Todo description is required")
            .isString()
            .withMessage("Todo description must be a string")
            .isLength({ max: 500 })
            .withMessage("Todo description must be less than 500 characters"),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];
}
