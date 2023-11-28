package com.openchat.backend.objects;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class SocketMessage {

  public String username;
  public String content;
  public String time;

}
