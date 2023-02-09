import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export function mongoIdValidator(field: string) {
    return [
        check(field)
            .exists()
            .withMessage(`${field} is required`)
            .isMongoId()
            .withMessage(`${field} is not a valid mongo id`),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];
}
