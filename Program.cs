var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Urls.Add("http://localhost:5000");
app.Urls.Add("https://localhost:5001");
app.MapGet("/api/hello", () => "Hello World!");
app.MapGet("/api/not-impl", () => { throw new NotImplementedException(); });

app.UseHttpsRedirection();
app.UseDefaultFiles(); // must be called before UseStaticFiles to serve the default file.
app.UseStaticFiles();
app.Run();
