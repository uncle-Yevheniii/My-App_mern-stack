import type { Response, Request } from 'express'

import User from '#models/user.models'
import { Logger } from '#helpers/logger'

export default async function checkAuth(req: Request, res: Response) {
    try {
        if (!req.decoded) {
            return res.status(401).json({ success: false, msg: 'Unauthorized - token missing' })
        }

        const { _id } = req.decoded

        const user = await User.findById(_id)
        if (!user) return res.status(400).json({ success: false, msg: 'User not found' })

        res.status(200).json({
            success: true,
            msg: 'User authenticated',
            user: { ...user.toObject(), password: undefined }
        })
    } catch (err) {
        Logger.error(err)
        return res.status(500).json({ err })
    }
}
