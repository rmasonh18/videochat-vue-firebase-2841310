/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Tue Jul 27 2021
 *
 * Filename: hello.js
 *
 * Copyright (c) 2021 Bujisoft
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
