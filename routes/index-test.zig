const std = @import("std");

pub export fn get(a: i32, b: i32) i32 {
  return a + b;
}

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("content-type: text/plain\n\n", .{});
    try stdout.print("Hello, World!\n", .{});
}
