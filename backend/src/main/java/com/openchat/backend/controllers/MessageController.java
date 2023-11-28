package com.openchat.backend.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.openchat.backend.objects.SocketMessage;

@Controller
public class MessageController {

  @MessageMapping("/messages")
  @SendTo("/topic/messages")
  public SocketMessage sendMessage(SocketMessage incomingMessage) throws Exception {
    return incomingMessage;
  }

}
