import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export function validateCreateGoal() {
    return [
        check("title")
            .not()
            .isEmpty()
            .withMessage("Goal title is required")
            .isString()
            .withMessage("Goal title must be a string")
            .isLength({ max: 50 })
            .withMessage("Goal title must be between 3 and 50 characters"),
        check("description")
            .not()
            .isEmpty()
            .withMessage("Goal description is required")
            .isString()
            .withMessage("Goal description must be a string")
            .isLength({ max: 500 })
            .withMessage("Goal description must be between 3 and 500 characters"),
        check("deadline")
            .not()
            .isEmpty()
            .withMessage("Goal deadline is required")
            .isISO8601()
            .withMessage("Goal deadline must be a valid date")
            .isAfter(new Date().toISOString())
            .withMessage("Goal deadline must be a date in the future"),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];
}

export function validateEditGoal() {
    return [
        check("goal.title")
            .optional()
            .not()
            .isEmpty()
            .withMessage("Goal title is required")
            .isString()
            .withMessage("Goal title must be a string")
            .isLength({ max: 50 })
            .withMessage("Goal title must be between 3 and 50 characters"),
        check("goal.description")
            .optional()
            .not()
            .isEmpty()
            .withMessage("Goal description is required")
            .isString()
            .withMessage("Goal description must be a string")
            .isLength({ max: 500 })
            .withMessage("Goal description must be between 3 and 500 characters"),
        check("goal.deadline")
            .optional()
            .not()
            .isEmpty()
            .withMessage("Goal deadline is required")
            .isISO8601()
            .withMessage("Goal deadline must be a valid date")
            .isAfter(new Date().toISOString())
            .withMessage("Goal deadline must be a date in the future"),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];
}
