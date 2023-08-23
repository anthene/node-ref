var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/hello", () => "Hello World!");

app.UseDefaultFiles(); // must be called before UseStaticFiles to serve the default file.
app.UseStaticFiles();
app.Run();
