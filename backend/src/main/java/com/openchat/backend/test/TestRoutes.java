package com.openchat.backend.test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin("http://localhost:5173")
public class TestRoutes {
  @GetMapping("/test/get")
  public String get() {
    return "Get Works";
  }

  @PostMapping("/test/post")
  public String post() {
    return "Post Works";
  }
}
