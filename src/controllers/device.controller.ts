import { RequestHandler } from "express";
import { DeviceService } from "../services";
import { config } from "../configs/config";

export class DeviceController {
  deviceService: DeviceService;

  constructor(deviceService: DeviceService) {
    this.deviceService = deviceService;
  }

  send: RequestHandler = async (req, res, next) => {
    const result = await this.deviceService.send(config.TUYA_DEVICE_ID, req.body);
    res.json({ success: true, data: result });
  };

  query: RequestHandler = async (req, res, next) => {
    const result = await this.deviceService.query(config.TUYA_DEVICE_ID);
    res.json({ success: true, data: result });
  };
}
